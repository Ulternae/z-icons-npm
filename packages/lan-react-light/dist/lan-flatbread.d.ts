import React from 'react';

export interface LanFlatbreadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbread(props: LanFlatbreadProps): React.ReactElement;
export default LanFlatbread;
