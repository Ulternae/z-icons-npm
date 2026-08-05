import React from 'react';

export interface LanVolumeControlPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeControlPhone(props: LanVolumeControlPhoneProps): React.ReactElement;
export default LanVolumeControlPhone;
