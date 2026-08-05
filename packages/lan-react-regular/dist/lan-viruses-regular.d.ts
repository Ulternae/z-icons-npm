import React from 'react';

export interface LanVirusesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusesRegular(props: LanVirusesRegularProps): React.ReactElement;
export default LanVirusesRegular;
