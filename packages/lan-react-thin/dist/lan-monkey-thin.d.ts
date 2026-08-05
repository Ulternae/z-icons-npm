import React from 'react';

export interface LanMonkeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMonkeyThin(props: LanMonkeyThinProps): React.ReactElement;
export default LanMonkeyThin;
