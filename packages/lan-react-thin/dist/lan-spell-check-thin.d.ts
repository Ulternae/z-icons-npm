import React from 'react';

export interface LanSpellCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpellCheckThin(props: LanSpellCheckThinProps): React.ReactElement;
export default LanSpellCheckThin;
