import React from 'react';

export interface CorePhoneVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneVolume(props: CorePhoneVolumeProps): React.ReactElement;
export default CorePhoneVolume;
