import React from 'react';

export interface LanListTimelineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTimelineThin(props: LanListTimelineThinProps): React.ReactElement;
export default LanListTimelineThin;
