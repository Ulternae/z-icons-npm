import React from 'react';

export interface LanCartXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartXmark(props: LanCartXmarkProps): React.ReactElement;
export default LanCartXmark;
