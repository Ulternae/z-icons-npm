import React from 'react';

export interface CoreSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSpeaker(props: CoreSpeakerProps): React.ReactElement;
export default CoreSpeaker;
