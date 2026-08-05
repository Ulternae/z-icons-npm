import React from 'react';

export interface LanToiletPaperSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToiletPaperSlashThin(props: LanToiletPaperSlashThinProps): React.ReactElement;
export default LanToiletPaperSlashThin;
