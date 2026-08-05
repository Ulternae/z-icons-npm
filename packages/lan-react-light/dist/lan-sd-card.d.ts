import React from 'react';

export interface LanSdCardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCard(props: LanSdCardProps): React.ReactElement;
export default LanSdCard;
