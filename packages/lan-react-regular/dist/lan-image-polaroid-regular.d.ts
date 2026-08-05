import React from 'react';

export interface LanImagePolaroidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePolaroidRegular(props: LanImagePolaroidRegularProps): React.ReactElement;
export default LanImagePolaroidRegular;
