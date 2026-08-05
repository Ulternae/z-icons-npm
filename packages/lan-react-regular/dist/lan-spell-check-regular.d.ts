import React from 'react';

export interface LanSpellCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpellCheckRegular(props: LanSpellCheckRegularProps): React.ReactElement;
export default LanSpellCheckRegular;
