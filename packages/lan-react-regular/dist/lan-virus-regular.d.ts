import React from 'react';

export interface LanVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusRegular(props: LanVirusRegularProps): React.ReactElement;
export default LanVirusRegular;
