import React from 'react';

export interface LanFileCsvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCsv(props: LanFileCsvProps): React.ReactElement;
export default LanFileCsv;
