import React from 'react';

export interface LanClipboardListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardList(props: LanClipboardListProps): React.ReactElement;
export default LanClipboardList;
