import React from 'react';

export interface LanFilePlusMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusMinusThin(props: LanFilePlusMinusThinProps): React.ReactElement;
export default LanFilePlusMinusThin;
