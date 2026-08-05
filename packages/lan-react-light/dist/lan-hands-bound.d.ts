import React from 'react';

export interface LanHandsBoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsBound(props: LanHandsBoundProps): React.ReactElement;
export default LanHandsBound;
