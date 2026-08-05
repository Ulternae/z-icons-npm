import React from 'react';

export interface LanVolumeControlPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeControlPhoneThin(props: LanVolumeControlPhoneThinProps): React.ReactElement;
export default LanVolumeControlPhoneThin;
