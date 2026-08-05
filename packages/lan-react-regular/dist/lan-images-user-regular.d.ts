import React from 'react';

export interface LanImagesUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesUserRegular(props: LanImagesUserRegularProps): React.ReactElement;
export default LanImagesUserRegular;
