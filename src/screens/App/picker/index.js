import React, { Component } from 'react';
import { TimePickerAndroid } from 'react-native';
import { View, Icon, Text, Card, Button } from 'native-base';
import { connect } from 'react-redux';
import AppTemplate from '../appTemplate';
import { TimeOfDelivery } from '../../../actions';


class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: 1,
            minutes: 0,
            Time: 'am'
        };
        this.Hours = this.Hours.bind(this);
        this.Minutes = this.Minutes.bind(this);
        this.Time = this.Time.bind(this);
    }

    componentDidMount() {
        if (this.props.DeliveryTime) {
            const { hour, minutes, Time } = this.props.DeliveryTime;
            this.setState({
                hour,
                minutes,
                Time
            });
        } else {
            return null;
        }
    }

    Hours(type) {
        if (type === 'plus') {
            if (this.state.hour === 12) {
                this.setState({ hour: 1 });
            } else {
                this.setState({ hour: this.state.hour + 1 });
            }
        } else if (this.state.hour === 1) {
            this.setState({ hour: 12 });
        } else {
            this.setState({ hour: this.state.hour - 1 });
        }
    }

    Minutes(type) {
        if (type === 'plus') {
            if (this.state.minutes === 59) {
                this.setState({ minutes: 0 });
            } else {
                this.setState({ minutes: this.state.minutes + 1 });
            }
        } else if (this.state.minutes === 0) {
            this.setState({ minutes: 59 });
        } else {
            this.setState({ minutes: this.state.minutes - 1 });
        }

    }

    Time() {
        if (this.state.Time === 'am') {
            this.setState({ Time: 'pm' });
        } else {
            this.setState({ Time: 'am' });
        }
    }

    HourDisplay() {
        if (this.state.hour < 10) {
            return '0' + this.state.hour;
        }
        return this.state.hour;
    }

    MinutesDisplay() {
        if (this.state.minutes < 10) {
            return '0' + this.state.minutes;
        }
        return this.state.minutes;

    }

    async TimePicker() {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: true, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
                if (hour > 12) {
                    this.setState({ hour: hour - 12, minutes: minute, Time: 'pm' });
                } else if (hour === 0) {
                    this.setState({ hour: 12, minutes: minute, Time: 'am' });
                } else {
                    this.setState({ hour, minutes: minute, Time: 'am' });
                }
            }
        } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
        }
    }


    render() {
        const nav = this.props.navigation;
        const plus = 'plus';
        const minus = 'minus';
        const { minutes, hour, Time } = this.state;
        const TimeDetails = { minutes, hour, Time };
        return (
            <AppTemplate navigation={nav} name="تحديد وقت التسليم">
                <Card style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', marginTop: 30 }}>

                    <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon onPress={() => this.Hours(plus)} type="FontAwesome" name="caret-up" style={{ color: '#2F7294' }} />
                        </View>
                        <View style={styles.Roll}>
                            <Text style={{ color: '#A4A4A4', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.HourDisplay()}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#2F7294' }} onPress={() => this.Hours(minus)} type="FontAwesome" name="caret-down" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#2F7294' }} onPress={() => this.Minutes(plus)} type="FontAwesome" name="caret-up" />
                        </View>
                        <View style={styles.Roll}>
                            <Text style={{ color: '#A4A4A4', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.MinutesDisplay()}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#2F7294' }} onPress={() => this.Minutes(minus)} type="FontAwesome" name="caret-down" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#2F7294' }} onPress={() => this.Time()} type="FontAwesome" name="caret-up" />
                        </View>
                        <View style={styles.Roll}>
                            <Text style={{ color: '#A4A4A4', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
                                {this.state.Time}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center' }}>
                            <Icon style={{ color: '#2F7294' }} onPress={() => this.Time()} type="FontAwesome" name="caret-down" />
                        </View>
                    </View>

                </Card>
                <Button style={{ alignSelf: 'center' }} onPress={() => this.TimePicker()}>
                    <Text>
                        Time Picker
                    </Text>
                </Button>
                <View style={{ flexDirection: 'column', alignSelf: 'center', height: 250, width: '50%', justifyContent: 'flex-end' }}>
                    <Button rounded block style={{ backgroundColor: '#15588D' }} onPress={() => this.props.TimeOfDelivery(TimeDetails, nav)}>
                        <Text style={{ fontSize: 20 }} >موافق</Text>
                    </Button>
                </View>
            </AppTemplate >
        );
    }
}

const styles = {
    Roll: {
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
        borderColor: '#A4A4A4',
        borderWidth: 1,
        borderRadius: 15,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
};
const mapStateToProps = (state) => {
    const { DeliveryTime } = state.auth;
    return { DeliveryTime };
};
export default connect(mapStateToProps, { TimeOfDelivery })(TimePicker);
