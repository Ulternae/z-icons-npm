import React from 'react';

export interface BruMeetupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMeetup(props: BruMeetupProps): React.ReactElement;
export default BruMeetup;
