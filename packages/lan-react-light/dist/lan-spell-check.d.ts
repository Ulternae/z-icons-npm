import React from 'react';

export interface LanSpellCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpellCheck(props: LanSpellCheckProps): React.ReactElement;
export default LanSpellCheck;
