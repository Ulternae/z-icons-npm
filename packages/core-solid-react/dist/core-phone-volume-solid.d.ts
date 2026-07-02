import React from 'react';

export interface CorePhoneVolumeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePhoneVolumeSolid(props: CorePhoneVolumeSolidProps): React.ReactElement;
export default CorePhoneVolumeSolid;
