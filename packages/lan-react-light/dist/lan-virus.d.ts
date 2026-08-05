import React from 'react';

export interface LanVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirus(props: LanVirusProps): React.ReactElement;
export default LanVirus;
