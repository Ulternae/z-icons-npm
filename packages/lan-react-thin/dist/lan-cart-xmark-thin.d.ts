import React from 'react';

export interface LanCartXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartXmarkThin(props: LanCartXmarkThinProps): React.ReactElement;
export default LanCartXmarkThin;
