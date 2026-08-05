import React from 'react';

export interface LanInboxesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxes(props: LanInboxesProps): React.ReactElement;
export default LanInboxes;
