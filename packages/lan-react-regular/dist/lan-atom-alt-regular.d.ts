import React from 'react';

export interface LanAtomAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAtomAltRegular(props: LanAtomAltRegularProps): React.ReactElement;
export default LanAtomAltRegular;
