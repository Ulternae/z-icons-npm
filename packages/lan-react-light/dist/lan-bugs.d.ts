import React from 'react';

export interface LanBugsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugs(props: LanBugsProps): React.ReactElement;
export default LanBugs;
