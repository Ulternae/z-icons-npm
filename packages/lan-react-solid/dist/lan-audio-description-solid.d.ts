import React from 'react';

export interface LanAudioDescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAudioDescriptionSolid(props: LanAudioDescriptionSolidProps): React.ReactElement;
export default LanAudioDescriptionSolid;
