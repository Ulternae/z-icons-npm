import React from 'react';

export interface LanGridDividersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridDividers(props: LanGridDividersProps): React.ReactElement;
export default LanGridDividers;
