import React from 'react';

export interface LanShredderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShredderThin(props: LanShredderThinProps): React.ReactElement;
export default LanShredderThin;
