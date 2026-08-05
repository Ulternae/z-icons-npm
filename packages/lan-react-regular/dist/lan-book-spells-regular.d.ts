import React from 'react';

export interface LanBookSpellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpellsRegular(props: LanBookSpellsRegularProps): React.ReactElement;
export default LanBookSpellsRegular;
