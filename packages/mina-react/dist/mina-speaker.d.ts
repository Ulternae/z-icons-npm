import React from 'react';

export interface MinaSpeakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSpeaker(props: MinaSpeakerProps): React.ReactElement;
export default MinaSpeaker;
