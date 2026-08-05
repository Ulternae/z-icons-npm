import React from 'react';

export interface LanPipeSectionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeSection(props: LanPipeSectionProps): React.ReactElement;
export default LanPipeSection;
