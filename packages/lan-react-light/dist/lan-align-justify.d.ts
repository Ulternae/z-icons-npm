import React from 'react';

export interface LanAlignJustifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignJustify(props: LanAlignJustifyProps): React.ReactElement;
export default LanAlignJustify;
