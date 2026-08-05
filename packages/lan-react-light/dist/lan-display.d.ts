import React from 'react';

export interface LanDisplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplay(props: LanDisplayProps): React.ReactElement;
export default LanDisplay;
