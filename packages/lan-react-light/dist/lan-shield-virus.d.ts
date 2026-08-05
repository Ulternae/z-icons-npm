import React from 'react';

export interface LanShieldVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldVirus(props: LanShieldVirusProps): React.ReactElement;
export default LanShieldVirus;
