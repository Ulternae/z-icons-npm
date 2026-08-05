import React from 'react';

export interface LanImagePolaroidUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidUserRegular(props: LanImagePolaroidUserRegularProps): React.ReactElement;
export default LanImagePolaroidUserRegular;
