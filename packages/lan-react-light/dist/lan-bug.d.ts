import React from 'react';

export interface LanBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBug(props: LanBugProps): React.ReactElement;
export default LanBug;
