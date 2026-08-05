import React from 'react';

export interface LanSpeakersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakersSolid(props: LanSpeakersSolidProps): React.ReactElement;
export default LanSpeakersSolid;
