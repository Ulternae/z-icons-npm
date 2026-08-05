import React from 'react';

export interface LanPipeSectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSectionThin(props: LanPipeSectionThinProps): React.ReactElement;
export default LanPipeSectionThin;
