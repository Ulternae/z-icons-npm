import React from 'react';

export interface BruCpanelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCpanel(props: BruCpanelProps): React.ReactElement;
export default BruCpanel;
