import React from 'react';

export interface LanTasksAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTasksAlt(props: LanTasksAltProps): React.ReactElement;
export default LanTasksAlt;
