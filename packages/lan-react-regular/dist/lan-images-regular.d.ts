import React from 'react';

export interface LanImagesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagesRegular(props: LanImagesRegularProps): React.ReactElement;
export default LanImagesRegular;
