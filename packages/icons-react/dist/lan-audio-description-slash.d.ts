import React from 'react';

export interface LanAudioDescriptionSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAudioDescriptionSlash: React.FC<LanAudioDescriptionSlashProps>;
export default LanAudioDescriptionSlash;
