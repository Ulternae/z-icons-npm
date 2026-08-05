import React from 'react';

export interface LanSpeakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpeakerSolid(props: LanSpeakerSolidProps): React.ReactElement;
export default LanSpeakerSolid;
