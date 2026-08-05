import React from 'react';

export interface LanAtomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomRegular(props: LanAtomRegularProps): React.ReactElement;
export default LanAtomRegular;
