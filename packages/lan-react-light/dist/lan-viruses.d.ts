import React from 'react';

export interface LanVirusesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViruses(props: LanVirusesProps): React.ReactElement;
export default LanViruses;
