import React from 'react';

export interface LanPipeSectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSectionRegular(props: LanPipeSectionRegularProps): React.ReactElement;
export default LanPipeSectionRegular;
