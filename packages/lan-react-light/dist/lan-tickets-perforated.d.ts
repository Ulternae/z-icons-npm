import React from 'react';

export interface LanTicketsPerforatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTicketsPerforated(props: LanTicketsPerforatedProps): React.ReactElement;
export default LanTicketsPerforated;
