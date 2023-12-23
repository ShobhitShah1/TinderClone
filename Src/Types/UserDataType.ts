export interface UserDataType {
  eventName: string;
  loginType: string;
  userFrom: string;
  mobileNo: string;
  identity: string;
  profileImage: string;
  fullName: string;
  birthdate: string;
  gender: string;
  city: string;
  orientation: string[];
  isOrientationVisible: boolean;
  hoping: string;
  educationDegree: string;
  collegeName: string;
  habitsExercise: string;
  habitsSmoke: string;
  habitsMovies: string;
  habitsDrink: string;
  magicalPersonCommunicationStr: string;
  magicalPersonReceivedLove: string;
  magicalPersonEducationLevel: string;
  magicalPersonStarSign: string;
  likesInto: string[];
  isBlockContact: boolean;
  latitude: number;
  longitude: number;
  radius: number;
  recentPik: string[];
}

export default UserDataType;
