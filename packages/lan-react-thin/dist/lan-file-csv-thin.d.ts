import React from 'react';

export interface LanFileCsvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCsvThin(props: LanFileCsvThinProps): React.ReactElement;
export default LanFileCsvThin;
