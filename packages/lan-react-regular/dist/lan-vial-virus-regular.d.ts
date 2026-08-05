import React from 'react';

export interface LanVialVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVirusRegular(props: LanVialVirusRegularProps): React.ReactElement;
export default LanVialVirusRegular;
