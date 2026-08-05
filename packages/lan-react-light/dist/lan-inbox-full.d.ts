import React from 'react';

export interface LanInboxFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxFull(props: LanInboxFullProps): React.ReactElement;
export default LanInboxFull;
